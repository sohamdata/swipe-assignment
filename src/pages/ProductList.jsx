import React, { useState } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiSolidPencil, BiTrash } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import InvoiceModal from "../components/InvoiceModal";
import { useNavigate } from "react-router-dom";
import { useProductListData } from "../redux/hooks";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/slices/productsSlice";

const ProductList = () => {
	const { productList, getOneProduct } = useProductListData();
	const isListEmpty = productList.length === 0;
	const navigate = useNavigate();

	return (
		<Row>
			<Col className="mx-auto" xs={12} md={8} lg={9}>
				<h3 className="fw-bold pb-2 pb-md-4 text-center">Swipe Assignment</h3>
				<Card className="d-flex p-3 p-md-4 my-3 my-md-4 ">
					{isListEmpty ? (
						<div className="d-flex flex-column align-items-center">
							<h3 className="fw-bold pb-2 pb-md-4">No products present</h3>
							<Link to="/products/create">
								<Button variant="primary">Create Product</Button>
							</Link>
						</div>
					) : (
						<div className="d-flex flex-column">
							<div className="d-flex flex-row align-items-center justify-content-between">
								<h3 className="fw-bold pb-2 pb-md-4">Products List</h3>
								<Link to="/products/create">
									<Button variant="primary mb-2 mb-md-4">Create Product</Button>
								</Link>
							</div>
							<Table responsive>
								<thead>
									<tr>
										<th>Product No.</th>
										<th>Name</th>
										<th>Price</th>
										<th>Catogory</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									{productList.map((product) => (
										<ProductRow
											key={product.id}
											product={product}
											navigate={navigate}
										/>
									))}
								</tbody>
							</Table>
						</div>
					)}
				</Card>
			</Col>
		</Row>
	);
};

const ProductRow = ({ product, navigate }) => {
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();

	const handleDeleteClick = (productId) => {
		dispatch(deleteProduct(productId));
	};

	const handleEditClick = () => {
		navigate(`/products/edit/${product.id}`);
	};

	const openModal = (event) => {
		event.preventDefault();
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};


	return (
		<tr>
			<td>{product.productNumber}</td>
			<td className="fw-normal">{product.productName}</td>
			<td className="fw-normal">
				{product.currency}
				{product.price}
			</td>
			<td className="fw-normal">{product.category}</td>
			<td style={{ width: "5%" }}>
				<Button variant="outline-primary" onClick={handleEditClick}>
					<div className="d-flex align-items-center justify-content-center gap-2">
						<BiSolidPencil />
					</div>
				</Button>
			</td>
			<td style={{ width: "5%" }}>
				<Button variant="danger" onClick={() => handleDeleteClick(product.id)}>
					<div className="d-flex align-items-center justify-content-center gap-2">
						<BiTrash />
					</div>
				</Button>
			</td>
			<td style={{ width: "5%" }}>
				<Button variant="secondary" onClick={openModal}>
					<div className="d-flex align-items-center justify-content-center gap-2">
						<BsEyeFill />
					</div>
				</Button>
			</td>
			{/* <InvoiceModal
				showModal={isOpen}
				closeModal={closeModal}
				info={{
					isOpen,
					id: invoice.id,
					currency: invoice.currency,
					currentDate: invoice.currentDate,
					invoiceNumber: invoice.invoiceNumber,
					dateOfIssue: invoice.dateOfIssue,
					billTo: invoice.billTo,
					billToEmail: invoice.billToEmail,
					billToAddress: invoice.billToAddress,
					billFrom: invoice.billFrom,
					billFromEmail: invoice.billFromEmail,
					billFromAddress: invoice.billFromAddress,
					notes: invoice.notes,
					total: invoice.total,
					subTotal: invoice.subTotal,
					taxRate: invoice.taxRate,
					taxAmount: invoice.taxAmount,
					discountRate: invoice.discountRate,
					discountAmount: invoice.discountAmount,
				}}
				items={invoice.items}
				currency={invoice.currency}
				subTotal={invoice.subTotal}
				taxAmount={invoice.taxAmount}
				discountAmount={invoice.discountAmount}
				total={invoice.total}
			/> */}
		</tr>
	);
};

export default ProductList;
